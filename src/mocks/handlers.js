
import { rest } from "msw";
import ticketNewData from "./ticketnew.json"

export const handlers = [
    rest.get('*/ticketnew', (req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json([
            ticketNewData
        ]),
      ),
    ),

  ]
