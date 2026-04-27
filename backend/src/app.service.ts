import { Injectable } from '@nestjs/common';
import { SupabaseService } from './supabase/supabase.service';

@Injectable()
export class AppService {
  constructor(private readonly supabase: SupabaseService) {}

  async getHello(): Promise<string> {
    // Exemple : lire des données depuis Supabase/PostgreSQL
    // const { data, error } = await this.supabase.from('users').select('*');
    return 'Hello World! — Connecté à Supabase (PostgreSQL)';
  }
}
