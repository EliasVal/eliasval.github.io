import fs from 'fs';

export const GET = async () => {
  return new Response(await fs.readFileSync('static/old-react/index.html'));
};
