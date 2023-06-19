import fs from 'fs';

export const GET = async ({ url }) => {
	return new Response(await fs.readFileSync('static/old-react/index.html'));
};
