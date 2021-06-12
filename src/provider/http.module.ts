import { HttpModule } from '@nestjs/common';
import { DynamicModule } from '@nestjs/common/interfaces';
import { HttpModuleOptions } from '@nestjs/common/http/interfaces';

/**
 * 继承HttpModule, 改为全局暴露, 可以方便注入
 */
export class MyHttpModule extends HttpModule {
  public static registerGlobal(config: HttpModuleOptions): DynamicModule {
    const moduleData = HttpModule.register(config);
    return {
      global: true,
      module: HttpModule,
      providers: moduleData.providers,
      exports: moduleData.providers,
    };
  }
}
