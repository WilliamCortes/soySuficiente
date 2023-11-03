import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  useUser,
  useSupabaseClient,
  Session,
} from "@supabase/auth-helpers-react";
import { Database } from "@/types";

type Profiles = Database["public"]["Tables"]["profiles"]["Row"];

const INITIAL_STATE = {
  profile: {
    username: "",
    website: "",
    avatarUrl: "",
  },
  loading: true,
  error: null,
};

type TProfilesData = {
  username: Profiles["username"];
  website: Profiles["website"];
  avatarUrl: Profiles["avatar_url"];
};
type TUseGetProfile = {
  profile: TProfilesData;
  loading: boolean;
  error: string | null;
};

export const useGetProfile = (session: Session) => {
  const supabase = useSupabaseClient<Database>();
  const user = useUser();
  const [state, setState] = useState<TUseGetProfile>(INITIAL_STATE);

  const getProfile = useCallback(async () => {
    try {
      if (!user) throw new Error("No user");
      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, website, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        setState({
          ...INITIAL_STATE,
          error: error.message,
          loading: false,
        });
      }

      if (data) {
        setState({
          profile: {
            username: data.username,
            website: data.website,
            avatarUrl: data.avatar_url,
          },
          loading: false,
          error: null,
        });
      }
    } catch (error) {
      alert("Error loading user data!");
      setState({
        ...INITIAL_STATE,
        error: "Error loading user data!",
        loading: false,
      });
    }
  }, [supabase, user]);

  useEffect(() => {
    getProfile();
  }, [getProfile, session]);

  return {
    profile: state.profile,
    loading: state.loading,
    error: state.error,
  };
};

type TUseUpdateProfileProps = {
  username: Profiles["username"];
  website: Profiles["website"];
  avatarUrl: Profiles["avatar_url"];
};

export async function useUpdateProfile({
  username,
  website,
  avatarUrl,
}: TUseUpdateProfileProps) {
  const supabase = useSupabaseClient<Database>();
  const user = useUser();
  try {
    if (!user) throw new Error("No user");

    const updates = {
      id: user.id,
      username,
      website,
      avatar_url: avatarUrl,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from("profiles").upsert(updates);
    if (error) throw error;
    alert("Profile updated!");
  } catch (error) {
    alert("Error updating the data!");
    console.log(error);
  }
}
