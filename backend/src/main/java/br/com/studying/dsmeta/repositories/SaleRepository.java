package br.com.studying.dsmeta.repositories;

import java.time.LocalDate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.studying.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {
	
	@Query("select s from Sale s where s.date between :min and :max order by s.amount desc")
	Page<Sale> findSales(LocalDate min, LocalDate max, Pageable pageable);
}
