import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Products) private readonly productsRepository: Repository<Products>) { }


    async createProduct(createProductDto: CreateProductDto): Promise<Products> {
        const newProduct = await this.productsRepository.save(createProductDto);
        return newProduct;
    }

    async findAllProducts(): Promise<Products[]> {
        const productData = await this.productsRepository.find();

        if (!productData || productData.length == 0) {
        throw new NotFoundException('Products data not found!')
        }
        return productData;
    }

    async getProductById(id: string): Promise<Products> {
        const existingProduct = await this.productsRepository.findOne({ where: { id } });

        if(!existingProduct) {
            throw new NotFoundException(`Product ${id} not found!`)
        }
        return existingProduct;
    }

    async updateProduct(id: string, updateProductDto: UpdateProductDto): Promise<Products> {
        const updateResult = await this.productsRepository.update(id, updateProductDto);

        if (updateResult.affected === 0) {
        throw new NotFoundException(`Product ${id} not found!`);
        }
    
        const updatedProduct = await this.productsRepository.findOne({ where: { id } });
    
        if (!updatedProduct) {
        throw new NotFoundException(`Product ${id} not found after update!`);
        }
    
        return updatedProduct;
    }

    async deleteProduct(id: string): Promise<Products> {
        const product = await this.productsRepository.findOne({ where: { id } });
        if (!product) {
        throw new NotFoundException(`Product ${id} not found!`);
        }

        await this.productsRepository.delete(id);

        return product;
    }
}
