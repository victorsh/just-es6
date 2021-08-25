import './scss/styles.scss'
import { ethers } from 'ethers'
import Web3 from 'web3'

window.onload = async () => {
  await ethersstuff()
  await web3stuff()
}

const ethersstuff = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const blockNumber = await provider.getBlockNumber()
  console.log(blockNumber)
  
  const element = document.createElement('div')
  element.innerHTML = 'hi'
  document.body.appendChild(element)
  
  add_text(blockNumber)

}

const web3stuff = async () => {
  let web3 = new Web3(Web3.givenProvider)
  add_text(web3.version)

  console.log(window.ethereum.isMetaMask)
}

const add_text = (txt) => {
  const el = document.createElement('div')
  el.innerHTML = txt
  document.body.appendChild(el)
}

const handleSaveToPC = async jsonData => {
  const fileData = await JSON.stringify(jsonData);
  const blob = new Blob([fileData], {type: "text/plain"})
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.download = 'filename.json'
  link.href = url
  link.click()
}