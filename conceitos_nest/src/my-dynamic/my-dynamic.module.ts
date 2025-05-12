import { DynamicModule, Module } from '@nestjs/common';

export type MyDynamicModuleConfigs = {
  apiKey: string;
  apiUrl: string;
};

export const My_DYNAMIC_CONFIGS = 'MY_DYNAMIC_CONFIGS';

@Module({})
export class MyDynamicModule {
  static register(myModuleConfigs: MyDynamicModuleConfigs): DynamicModule {
    console.log('myModuleConfigs', myModuleConfigs);

    return {
      module: MyDynamicModule,
      imports: [],
      providers: [
        {
          provide: My_DYNAMIC_CONFIGS,
          useValue: myModuleConfigs,
        },
      ],
      controllers: [],
      exports: [My_DYNAMIC_CONFIGS],
    };
  }
}
