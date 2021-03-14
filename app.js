require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')

const { Sequelize, Model, DataTypes, sequelize } = require('./modules/connect')

