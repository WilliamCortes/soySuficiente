const host = process.env.HOST || "http://localhost:3001/enough";
class Api {
  private readonly baseUrl?: string;

  constructor(baseUrl = `${host}`) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    method: string,
    url: string,
    data?: any
  ): Promise<T> {
    const headers = {
      "Content-Type": "application/json",
    };

    const options: RequestInit = {
      method,
      headers,
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(`${this.baseUrl}${url}`, options);
    const jsonResponse = await response.json();

    if (!response.ok) {
      throw new Error(jsonResponse || response.statusText);
    }

    return jsonResponse;
  }

  public async get<T>(url: string): Promise<T> {
    return this.request<T>("GET", url);
  }

  public async post<T>(url: string, data: any): Promise<T> {
    return this.request<T>("POST", url, data);
  }

  public async put<T>(url: string, data: any): Promise<T> {
    return this.request<T>("PUT", url, data);
  }

  public async delete(url: string): Promise<void> {
    await this.request<void>("DELETE", url);
  }
}

export default Api;
