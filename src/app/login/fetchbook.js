'use server'

export const fetchbook = async (bookRequest) => {
    try {
        const res = await axios.get(
          'https://carefree-empathy-production.up.railway.app/get-user-book-request',
          {
            params: { items: bookRequest },
          }
        );
        return res.data;
      } catch (error) {
        console.error('Error fetching book data:', error);
        return null;
      }        

}