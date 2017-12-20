package za.co.sbic.dev.vendingmachineapp.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import za.co.sbic.dev.vendingmachineapp.product.beverage.Beverage;
import za.co.sbic.dev.vendingmachineapp.product.beverage.BeverageRepository;

import java.math.BigDecimal;

@Component
public class DatabaseConfig implements CommandLineRunner {

    private final BeverageRepository repository;

    @Autowired
    public DatabaseConfig(BeverageRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        // Row 01
        this.repository.save(new Beverage("Coke", "Coka-Cola product", new BigDecimal("7.50"), "coke-icon.png", "100", "100", 10));
        this.repository.save(new Beverage("Sprite", "Coka-Cola product", new BigDecimal("8.50"), "sprite-icon.png", "100", "100", 10));
        this.repository.save(new Beverage("Fanta Orange", "Coka-Cola product", new BigDecimal("8.50"), "fanta-orange-icon.png", "100", "100", 10));
        this.repository.save(new Beverage("Fanta Grape", "Coka-Cola product", new BigDecimal("9.50"), "fanta-grape-icon.png", "65", "100", 10));
        // Row 02
        this.repository.save(new Beverage("Appletiser", "Coka-Cola product", new BigDecimal("12.50"), "appletiser-icon.png", "65", "100", 10));
        this.repository.save(new Beverage("Grapetiser", "Coka-Cola product", new BigDecimal("12.50"), "grapetiser-icon.png", "100", "100", 10));
        this.repository.save(new Beverage("Pepsi", "Coka-Cola product", new BigDecimal("7.00"), "pepsi-icon.png", "95", "100", 10));
        this.repository.save(new Beverage("Red Bull", "Coka-Cola product", new BigDecimal("24.50"), "redbull-icon.png", "100", "100", 10));

        System.out.println("Vending Machine ready to serve....");
    }
}
