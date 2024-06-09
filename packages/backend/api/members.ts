import type { VercelRequest, VercelResponse } from '@vercel/node'
import MembersService from '../services/members';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    try {
        if(req.query.public!==undefined){
            const members = await MembersService.listPublicProfiles();
            return res.status(200).json({members: members});
        }else{
            return res.status(403).send({message: "No access here, soldier."});
        }
    } catch (e) {
        let message = 'Unknown Error'
        if (e instanceof Error) message = e.message
        res.status(500).send(message);
    }
}
