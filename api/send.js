// api/send.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { data } = req.body;

  try {
    const response = await fetch('https://api.contact2sale.com/integration/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authentication: 'b1ec110ba8b01fa2c942eba5eb1488f9fe95e6359fbdefc008'
      },
      body: JSON.stringify({ data })
    });

    const result = await response.json();
    res.status(200).json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Erro no envio.' });
  }
}
