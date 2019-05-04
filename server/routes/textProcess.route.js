const express = require('express');
const asyncHandler = require('express-async-handler')
const config = require('../config/config');

const StringModel = require('../models/string.model');

const router = express.Router();
module.exports = router;

router.post('/', asyncHandler(processText), getAllCounts);
router.get('/', getAllCounts);

async function processText(req, res, next) {
	let str = req.body.string;
	if (str && str.length > 1) {
		let words = str.toLowerCase().split(' ');

		await asyncForEach(words, async (word) => {
			let res = await StringModel.findOne({ text: word });
			if (!res) {
				res = await StringModel.create({ text: word });
			}
			await StringModel.updateOne({ text: word }, { count: res.count + 1 });
		});
		next();
	} else {
		next();
	}
}

function getAllCounts(req, res) {
	let query = StringModel.find();
	query.exec(function (err, strings) {
		res.json(strings);
	});
}


async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}
