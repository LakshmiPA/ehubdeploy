const _ = require('lodash');

const Models = require('../../models/index');

module.exports.addVendor = async (req,res,next)=>{
    try{
        var { user_name,email,phone_number,address} = req.body;
        // user_name=_.trim(user_name);
        // email=_trim(email);
        // phone_number=_.trim(phone_number);
        // address=_.trim(address)
        // belongs_to_category=_.trim(belongs_to_category);
        var [existingVendor, insertedVEndor] = await Models.vendor_details.findOrCreate({
            where:{
                email
            },
            defaults:{
                user_name,
                email,
                phone_number,
                address
            }
        })
        if(!insertedVEndor){
            return res.status(400).json({error:true, message:"Vendor with this email already exist."});
        }
        return res.status(200).json({error:false, message:"Vendor has been created successfully."});

    }catch(e){
        next(e);
    }
}

module.exports.showProducts = async (req,res,next)=>{
    try{

        var showProducts = await Models.products.findAll({
            include:[{
                model:Models.vendor_details
            }]
        });
        if(!showProducts){
            return res.status(400).json({error:true, message:"No vendors exist."});
        }
        return res.status(200).json({error:false, data:showProducts});

    }catch(e){
        next(e);
    }
}

module.exports.addProduct = async (req,res,next)=>{
    try{
        var { vendor_id,selected_category,selected_product} = req.body;
        var updatedVendor = await Models.vendor_details.update({
            selected_category,
            selected_product
        },{
            where:{
                vendor_id
            }
        })
        if(!updatedVendor){
            return res.status(400).json({error:true, message:"Error in updating."});
        }
        return res.status(200).json({error:false, message:"Vendor product has been added successfully."});

    }catch(e){
        next(e);
    }
}
 

module.exports.showAllInputs = async (req,res,next)=>{
    try{
        var showProducts = await Models.products.findAll({
            order:[['product_name','asc']]
        });
        var showCategories = await Models.categories.findAll({
            order:[['category_name','asc']]

        });
        return res.status(200).json({error:false, showProducts,showCategories})

    }catch(e){
        next(e);
    }
}