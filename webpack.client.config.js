
module.exports={
    entry: [
        './src/index.js'
      ],
      output:{
        path:__dirname,
        filename:'./public/bundle.js'
      },
      module:{
        loaders:[
          {
            loader:'babel-loader',
            query:{
              presets :['react', 'es2015','stage-0']
            },
            test:/\.js?$/,
            exclude:/(node_modules)/
          }
        ]
      }   
};