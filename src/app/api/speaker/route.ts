import { NextResponse } from "next/server";
import speaker from "../../../Jsons/speakers.json";

const sepakers = speaker;

export function GET(){
    return NextResponse.json(sepakers)
}