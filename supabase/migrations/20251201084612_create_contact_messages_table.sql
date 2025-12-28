/*
  # Contact Messages Table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key) - Unique identifier for each message
      - `name` (text, required) - Name of the person contacting
      - `email` (text, required) - Email address for contact
      - `message` (text, required) - The message content
      - `status` (text, default 'unread') - Message status (unread/read)
      - `created_at` (timestamptz, default now()) - Timestamp of message submission

  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for anyone to insert messages (public form submission)
    - Add policy for authenticated admin users to read messages
    
  3. Important Notes
    - Public can submit messages without authentication
    - Messages are automatically marked as 'unread'
    - Admin access would require separate authentication setup
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'unread',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read contact messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);