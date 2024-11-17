import dotenv from 'dotenv'
dotenv.config()
import { HfInference } from '@huggingface/inference'

const hf = new HfInference(process.env.HF_TOKEN)

const text = "It's an exciting time to be an A.I. engineer."

const response = await hf.textToSpeech({
  inputs: text,
  model: "espnet/kan-bayashi_ljspeech_vits"
})

console.log(response)

const audioElement = document.getElementById('speech')
const speechUrl = URL.createObjectURL(response)
audioElement.src = speechUrl