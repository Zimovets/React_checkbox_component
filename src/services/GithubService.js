export default class GitHubService {
  apiBase = 'http://api.github.com/';

  getUsersByCity = async (city) => {
    const res = await fetch(`${this.apiBase}search/users?q=location:${city}&per_page=10`);
    if (!res.ok) {
      throw new Error('Something wrong');
    }
    return await res.json();
  }

  getUserbyId = async (id) => {
    const res = await fetch(`${this.apiBase}/user/${id}`);
    if (!res.ok) {
      throw new Error('Something wrong');
    }
    return await res.json();
  }
}