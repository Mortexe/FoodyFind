const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
  res.render('index');
};

// Render Add Store page
exports.addStore = (req,res) => {
  res.render('editStore', { title: 'Add Store' });
};

// Save Store in databse
exports.createStore = async (req, res) => {
    const store = await(new Store(req.body)).save();
    req.flash('success', `Successfully Created ${store.name}. Care to leave a review?`);
    res.redirect(`/store/${store.slug}`);
};

exports.getStores = async (req,res) => {
  // 1. Query the DB for a list of all stores
  const stores = await Store.find();
  console.log(stores);
  res.render('stores', { title: 'Stores', stores});
};
