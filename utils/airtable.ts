import Airtable from 'airtable';

const apiKey = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY || "";
const baseId = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID || "";
const tableName = process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME || "";

const createRecord = async (fid: string, mes: string) => {
  try {
    const airtable = new Airtable({ apiKey: apiKey });

    const response = await airtable.base(baseId).table(tableName).create({
      FID: fid,
      Message: mes,
    });

    console.log('Record created:', response.id);
  } catch (error) {
    console.error('Error creating record:', error);
    throw error;
  }
};

export default createRecord;
