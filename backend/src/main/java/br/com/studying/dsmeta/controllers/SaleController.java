package br.com.studying.dsmeta.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.studying.dsmeta.entities.Sale;
import br.com.studying.dsmeta.services.SaleService;

@RestController
@RequestMapping("/sales")
public class SaleController {
	
	@Autowired private SaleService saleService;

	@GetMapping
	public List<Sale> getAll() {
		return saleService.findSales();
	}
} 
