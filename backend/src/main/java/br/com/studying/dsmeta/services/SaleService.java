package br.com.studying.dsmeta.services;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.studying.dsmeta.entities.Sale;
import br.com.studying.dsmeta.repositories.SaleRepository;

@Service
public class SaleService {

	@Autowired private SaleRepository saleRepository;
	
	public Page<Sale> findSales(String minDate, String maxDate, Pageable pageable) {
		LocalDate now = LocalDate.now();
		LocalDate min = minDate.equals("") ? now.minusYears(1) : LocalDate.parse(minDate);
		LocalDate max = maxDate.equals("") ? now : LocalDate.parse(maxDate);
		
		return saleRepository.findSales(min, max, pageable);
	}
	
	public Sale findSaleId(Long id) {
		return saleRepository.findById(id).orElse(null);
	}
}
