module.exports = (temp,product) =>{
    let outputFile = temp.replace(/%FRUIT_EMOJI%/g, product.emoji);
    outputFile = outputFile.replace(/%FRUIT_NAME%/g, product.fruitName);
    outputFile = outputFile.replace(/%NO_OF_FRUIT%/g, product.noOfFruit);
    outputFile = outputFile.replace(/%RATE_OF_FRUIT%/g, product.rateOfFruit);
    outputFile = outputFile.replace(/%ID%/g, product.id);
    return outputFile;
}