package za.co.sbic.dev.vendingmachineapp.product.beverage;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;
import java.math.BigDecimal;

@Data
@Entity
public class Beverage implements Serializable {

    @Id
    @GeneratedValue
    private long id;

    private String name;
    private String description;
    private BigDecimal price;
    private String image;
    private String w;
    private String h;
    private int count;

    public Beverage() {}

    public Beverage(String name, String description, BigDecimal price, String image, String w, String h, int count) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.w = w;
        this.h = h;
        this.count = count;
    }

}
