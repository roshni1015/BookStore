import customerdetail from '../models/customer.model'

export const customerDetails = async(body) =>{
    const data = await customerdetail.create(body)
    return data;
}