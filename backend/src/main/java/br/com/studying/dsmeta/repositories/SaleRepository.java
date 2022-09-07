package br.com.studying.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.studying.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {
}
