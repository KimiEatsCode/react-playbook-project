
import { rest } from "msw";
import ticketNewData from "./ticketNew.json";
import ticketFeedbackData from "./ticketFeedback.json"
import ticketProcessingData from "./ticketProcessing.json"
import ticketAwaitingData from "./ticketAwaiting.json"
import ticketApprovedData from "./ticketApproved.json"

export const handlers = [
    rest.get('*/ticketNew', (req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json([
            ticketNewData
        ]),
      ),
    ),
    rest.get('*/ticketFeedback', (req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json([
          ticketFeedbackData
        ]),
      ),
    ),
    rest.get('*/ticketProcessing', (req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json([
          ticketProcessingData
        ]),
      ),
    ),
    rest.get('*/ticketAwaiting', (req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json([
          ticketAwaitingData
        ]),
      ),
    ),
    rest.get('*/ticketApproved', (req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json([
          ticketApprovedData
        ]),
      ),
    ),

  ]
