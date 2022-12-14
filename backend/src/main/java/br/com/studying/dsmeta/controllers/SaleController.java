package br.com.studying.dsmeta.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.studying.dsmeta.entities.Sale;
import br.com.studying.dsmeta.services.SaleService;
import br.com.studying.dsmeta.services.SmsService;

@RestController
@RequestMapping("/sales")
public class SaleController {
	
	@Autowired private SaleService saleService;
	@Autowired private SmsService smsService;
	
	@GetMapping
	public Page<Sale> getAll(
			@RequestParam(value="minDate", defaultValue="") String minDate, 
			@RequestParam(value="maxDate", defaultValue="") String maxDate, 
			Pageable pageable) {
		return saleService.findSales(minDate, maxDate, pageable);
	}
	
	@GetMapping("{id}/notification")
	public void notifySms(@PathVariable Long id) {
		smsService.sendSms(id);
	}
} 
