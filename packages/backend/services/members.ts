import { sql } from '@vercel/postgres';

export default class MembersService{


    public static async listPublicProfiles(){
        try{
            const result =
            await sql`
                SELECT members.id, members.nickname, members.instagram, members.voivodeship, members.about, members.rank, members.joined,
                    json_agg(JSON_BUILD_OBJECT(cosplays.id,COALESCE(clones.number,unlisted_clones.number))) AS cosplay_numbers, 
                    json_agg(JSON_BUILD_OBJECT(cosplays.id,COALESCE(clones.name,unlisted_clones.name))) AS cosplay_names, 
                    json_agg(JSON_BUILD_OBJECT(cosplays.id,COALESCE(clones.variant,unlisted_clones.variant))) AS cosplay_variants,
                    json_agg(JSON_BUILD_OBJECT(cosplays.id,units.name)) AS cosplay_units,
                    json_agg(JSON_BUILD_OBJECT(cosplays.id,units.color)) AS cosplay_colors,
                    json_agg(JSON_BUILD_OBJECT(cosplays.id,clones.image_path)) AS cosplay_avatars,
                    json_agg(JSON_BUILD_OBJECT(cosplays.id,cosplays.image_url)) AS cosplay_images,
                    json_agg(JSON_BUILD_OBJECT(cosplays.id,cosplays.status)) AS cosplay_status
                    FROM members 
                    LEFT JOIN cosplays ON cosplays.member_id=members.id 
                    LEFT JOIN clones ON cosplays.clone_id=clones.id 
                    LEFT JOIN unlisted_clones ON cosplays.unlisted_id=unlisted_clones.id 
                    LEFT JOIN units ON units.id=COALESCE(clones.unit_id,unlisted_clones.unit_id) 
                    WHERE members.status='active' AND members.rank IN ('Kadet','Żołnierz','Kapitan','Sierżant','Komandor') AND cosplays.status IN ('reserved','finished')
                    GROUP BY members.id
                    ORDER BY members.id
            `;  
            return result.rows
        }catch(e){
            throw(e)
        }
    }
}