import {createClient } from "@supabase/supabase-js"

export const supabase = createClient(
    "https://muhiawvsgdtuqghouchg.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11aGlhd3ZzZ2R0dXFnaG91Y2hnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3MzQ3OTksImV4cCI6MjAzMTMxMDc5OX0.t-efAPnLNoWoNiUFTdBsHsdhTBF_TahgpOerdvvYNjQ")