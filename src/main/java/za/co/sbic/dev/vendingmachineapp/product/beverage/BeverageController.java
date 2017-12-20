package za.co.sbic.dev.vendingmachineapp.product.beverage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@RequestMapping("/beverage")
public class BeverageController {

    private static final Logger logger = LoggerFactory.getLogger(BeverageController.class);

    @Autowired
    private BeverageService beverageSvc;

    //GET - ShortCurt Way
    @RequestMapping("/beverages")
    public List<Beverage> getAllBeverages() {
        return beverageSvc.getAllBeverages();
    }

    //GET
    @RequestMapping("/beverage/{id}")
    public Beverage getBeverage(@PathVariable long id) {
        return beverageSvc.getBeverage(id);
    }

    //PUT == Update
    @RequestMapping(method = RequestMethod.PUT, value="/beverage/{id}")
    public void updateBeverage(@PathVariable long id, @RequestBody Beverage beverage) {
        beverageSvc.updateBeverage(id, beverage);
    }

    /*
    //POST == Create
    @RequestMapping(method = RequestMethod.POST, value="/beverages")
    public void addBeverage(@RequestBody Beverage beverage) {
        beverageSvc.addBeverage(beverage);
    }

    //DELETE == Delete
    @RequestMapping(method = RequestMethod.DELETE, value="/beverage/{id}")
    public void deleteBeverage(@PathVariable long id) {
        beverageSvc.deleteBeverage(id);
    }
    */

}
