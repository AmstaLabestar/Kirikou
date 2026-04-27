import { Injectable, OnModuleInit } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import supabaseConfig from '../config/supabase.config';

@Injectable()
export class SupabaseService implements OnModuleInit {
  private client: SupabaseClient;

  onModuleInit() {
    const config = supabaseConfig();
    const { url, anonKey } = config.supabase;
    this.client = createClient(url!, anonKey!);
  }

  get client_() {
    return this.client;
  }

  // Méthodes utilitaires pour interagir avec la DB
  async from(table: string) {
    return this.client.from(table);
  }

  async query(table: string) {
    return this.client.from(table);
  }
}