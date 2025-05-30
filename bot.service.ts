import { supabase } from '../supabase';
import axios from 'axios';

/**
 * Fetch bot token from Supabase
 */
export async function getBotToken(botId: string): Promise<string> {
  const { data, error } = await supabase
    .from('bots')
    .select('token')
    .eq('id', botId)
    .single();

  if (error || !data) throw new Error('Bot token not found for botId: ' + botId);
  return data.token;
}

/**
 * Send a message to a Telegram user
 */
export async function sendTelegramMessage(botId: string, chatId: number, text: string): Promise<void> {
  const token = await getBotToken(botId);
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  await axios.post(url, {
    chat_id: chatId,
    text: text
  });
}

/**
 * Send a message to a Viber user
 */
export async function sendViberMessage(botId: string, userId: string, text: string): Promise<void> {
  const token = await getBotToken(botId);
  const url = 'https://chatapi.viber.com/pa/send_message';

  await axios.post(url, {
    receiver: userId,
    min_api_version: 1,
    sender: { name: 'SmartHub' },
    type: 'text',
    text: text
  }, {
    headers: { 'X-Viber-Auth-Token': token }
  });
}