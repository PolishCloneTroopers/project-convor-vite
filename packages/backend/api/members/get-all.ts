import type { VercelRequest, VercelResponse } from '@vercel/node'
import MembersService from '../../services/members';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    try {
        const members = await MembersService.listPublicProfiles();
        return res.status(200).json({members: members});
    } catch (e) {
        let message = 'Unknown Error'
        if (e instanceof Error) message = e.message
        res.status(500).send(message);
    }
}
