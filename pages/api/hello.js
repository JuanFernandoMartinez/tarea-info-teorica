// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import  reachableStates  from "../../model/algorithms"
export default function handler(req, res) {
  res.status(200).json(reachableStates())
}
