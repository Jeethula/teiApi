import { NextResponse } from "next/server";
import accomadation from "../../../Jsons/accomadation.json";

const accomadations = accomadation;

export function GET(){
    return NextResponse.json(accomadations)
}