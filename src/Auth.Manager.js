export class AuthManager {
  constructor(supabase) {
    this.supabase = supabase
  }

  async signUp(email, password) {
    const { user, error } = await this.supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    return user;
  }

  async signUpWithGoogle() {
    
    let { data, error } = await this.supabase.auth.signInWithOAuth({
        provider: 'google'
      });

    if (error) {
      throw new Error(error.message);
    }

    return user;
  }

  async signIn(email, password) {
    const { user, error } = await this.supabase.auth.signIn({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    return user;
  }

  async signOut() {
    const { error } = await this.supabase.auth.signOut();

    if (error) {
      throw new Error(error.message);
    }
  }

  async getCurrentUser() {
    return this.supabase.auth.getUser();
  }
}
