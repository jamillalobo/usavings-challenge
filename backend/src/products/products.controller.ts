import { Controller, Get, Post, Body, Put, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto'; // Make sure the file path is correct and the file exists.

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Post()
    async createProduct(@Res() response, @Body() createProductDto: CreateProductDto) {
      try {
        const newProduct = await this.productsService.createProduct(createProductDto);
        return response.status(HttpStatus.CREATED).json({
          message: 'Product has been created successfully',
          newProduct});
      } catch (err) {
        return response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: 400,
          message: 'Error: Product not created!',
          error: 'Bad Request'
        });
      }
    }
  
    @Get()
    async getProducts(@Res() response) {
      try {
        const productsData = await this.productsService.findAllProducts();
        return response.status(HttpStatus.OK).json({
        message: 'All products data found successfully',productsData});
      } catch (err) {
        return response.status(err.status).json(err.response);
      }
    }
  
    @Get(':id')
    async getProduct(@Res() response, @Param('id') id: string) {
      try {
        const existingProduct = await this.productsService.getProductById(id);
        return response.status(HttpStatus.OK).json({
          message: 'Product found successfully',existingProduct});
      } catch (err) {
        return response.status(err.status).json(err.response);
      }
    }
  
    @Put(':id')
    async updateProduct(@Res() response, @Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
      try {
        const existingProduct = await this.productsService.updateProduct(id, updateProductDto);
        return response.status(HttpStatus.OK).json({
          message: 'Product has been successfully updated',
          existingProduct});
      } catch (err) {
        return response.status(err.status).json(err.response);
      }
    }
  
    @Delete(':id')
    async deleteProduct(@Res() response, @Param('id') id: string) {
      try {
        const deletedProduct = await this.productsService.deleteProduct(id);
        return response.status(HttpStatus.OK).json({
          message: 'Product deleted successfully',
          deletedProduct});
      } catch (err) {
        return response.status(err.status).json(err.response);
      }
    }
}
