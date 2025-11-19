import type { VercelRequest, VercelResponse } from '@vercel/node';
import { wishlist } from './data';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(wishlist);
}
