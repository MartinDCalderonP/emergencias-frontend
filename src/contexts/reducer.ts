import dayjs, { Dayjs } from "dayjs"

export type Action = {
  type: string
}

export const initialState = dayjs("2023-02")

export const actionTypes = {
  PREV_MONTH: "PREV_MONTH",
  NEXT_MONTH: "NEXT_MONTH"
}

const reducer = (state: Dayjs, action: Action) => {
  switch (action.type) {
    case actionTypes.PREV_MONTH:
      return state.subtract(1, "month")
    case actionTypes.NEXT_MONTH:
      return state.add(1, "month")
    default:
      return state
  }
}

export default reducer
