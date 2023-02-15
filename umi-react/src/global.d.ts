interface Window {
  __POWERED_BY_QIANKUN__: string
}

// /// <reference lib="dom" />
// // lodash modules
// declare module 'lodash';
// // jsoneditor-react modules
// declare module 'jsoneditor-react';
// // CSS modules
// type CSSModuleClasses = { readonly [key: string]: string };

// declare module '*.css' {
//   const classes: CSSModuleClasses;
//   export default classes;
// }
// declare module '*.less' {
//   const classes: CSSModuleClasses;
//   export default classes;
// }

// // Built-in asset types

// // images
// declare module '*.jpg' {
//   const src: string;
//   export default src;
// }
// declare module '*.jpeg' {
//   const src: string;
//   export default src;
// }
// declare module '*.png' {
//   const src: string;
//   export default src;
// }
// declare module '*.gif' {
//   const src: string;
//   export default src;
// }
// declare module '*.svg' {
//   export function ReactComponent(
//     props: React.SVGProps<SVGSVGElement>
//   ): React.ReactElement;
//   const src: string;
//   export default src;
// }
// declare module '*.ico' {
//   const src: string;
//   export default src;
// }
// declare module '*.webp' {
//   const src: string;
//   export default src;
// }
// declare module '*.avif' {
//   const src: string;
//   export default src;
// }

// // media
// declare module '*.mp4' {
//   const src: string;
//   export default src;
// }
// declare module '*.webm' {
//   const src: string;
//   export default src;
// }
// declare module '*.ogg' {
//   const src: string;
//   export default src;
// }
// declare module '*.mp3' {
//   const src: string;
//   export default src;
// }
// declare module '*.wav' {
//   const src: string;
//   export default src;
// }
// declare module '*.flac' {
//   const src: string;
//   export default src;
// }
// declare module '*.aac' {
//   const src: string;
//   export default src;
// }

// // fonts
// declare module '*.woff' {
//   const src: string;
//   export default src;
// }
// declare module '*.woff2' {
//   const src: string;
//   export default src;
// }
// declare module '*.eot' {
//   const src: string;
//   export default src;
// }
// declare module '*.ttf' {
//   const src: string;
//   export default src;
// }
// declare module '*.otf' {
//   const src: string;
//   export default src;
// }

// // other
// declare module '*.wasm' {
//   const initWasm: (
//     options: WebAssembly.Imports
//   ) => Promise<WebAssembly.Exports>;
//   export default initWasm;
// }
// declare module '*.webmanifest' {
//   const src: string;
//   export default src;
// }
// declare module '*.pdf' {
//   const src: string;
//   export default src;
// }

// web worker
declare module '*?worker' {
  const workerConstructor: {
    new (): Worker;
  };
  export default workerConstructor;
}

declare module '*?worker&inline' {
  const workerConstructor: {
    new (): Worker;
  };
  export default workerConstructor;
}

declare module '*?sharedworker' {
  const sharedWorkerConstructor: {
    new (): SharedWorker;
  };
  export default sharedWorkerConstructor;
}

declare module '*?raw' {
  const src: string;
  export default src;
}

declare module '*?url' {
  const src: string;
  export default src;
}

declare module '*?inline' {
  const src: string;
  export default src;
}

declare module NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    UMI_APP_ENDPOINT: 'PROD' | 'LOCAL';
  }
}

interface JSONObject {
  [key: string]: string | number | JSONObject | JSONObject[] | null;
}

declare const __ENV__: string;
