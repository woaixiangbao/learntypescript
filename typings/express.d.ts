declare module 'express' {
  function express(): express.Application;
  namespace express {
    interface Application {
      get(path: string, handler: (req: Request, res: Response) => void): void;
      listen(port: number, callback: () => void): void;
    }

    interface Request{}

    interface Response {
      end(data: string): void;
    }
  }
  export = express;
}
