import { NextApiRequest, NextApiResponse } from 'next';

const registration = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  try {
    const response = await fetch('https://hooks.zapier.com/hooks/catch/137081/bebh4cp/', {
      method: 'POST',
      body: JSON.stringify(req.body),
    });

    res.status(200).json(response);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

export default registration;
