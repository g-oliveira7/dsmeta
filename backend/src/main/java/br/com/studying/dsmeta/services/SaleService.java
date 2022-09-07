package br.com.studying.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.studying.dsmeta.entities.Sale;
import br.com.studying.dsmeta.repositories.SaleRepository;

@Service
public class SaleService {

	@Autowired private SaleRepository saleRepository;
	
	public List<Sale> findSales() {
		return saleRepository.findAll();
	}
}
