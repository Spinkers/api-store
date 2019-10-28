'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = () => {
    return Product.find({active: true}, 'title price slug');
}

exports.getBySlug = (slug) => {
    return Product.findOne({ slug: slug, active: true }, 'title description price slug tags');
}

exports.getById = (id) => {
    return Product.findById(id);
}

exports.getByTag = (tag) => {
    return Product.find({ tags: tag }, 'title price slug tags');
}

exports.create = (data) => {
    var product = new Product(data);
    return product.save();
}

exports.update = (id, data) => {
   return Product.findByIdAndUpdate(id,
        {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price
            }
        });
}

exports.delete = (id) => {
    return Product.findOneAndDelete(id);
}