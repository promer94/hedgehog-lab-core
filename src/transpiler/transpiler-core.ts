import preprocess from './preprocess';
import operatorOverload from './operator-overload';
import babel from '@babel/standalone'
import env from '@babel/preset-env'
import ts from '@babel/preset-typescript'


//register the overload plugin
babel.registerPlugin('overload', operatorOverload);

//register preset-env
babel.registerPreset('@babel/preset-env', env);

//register typescript preset
babel.registerPreset('@babel/preset-typescript', ts);

function transpilerCore(source: string) {

  //the real compiling function
  const transpiled = babel.transform(
    preprocess(source), // the code
    {
      plugins: ['overload'],
      presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
      ],
      filename: 'temp.ts',
      sourceType: 'script',
    }
  );

  //return the code
  console.log('The output of transpiler core is: \n' + transpiled.code);
  return transpiled.code;
}

export default transpilerCore;
