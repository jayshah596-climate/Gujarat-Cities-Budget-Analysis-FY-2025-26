// Gujarat Cities Budget Analysis Dashboard - JavaScript
class BudgetDashboard {
    constructor() {
        this.data = {
            budget_overview: [
                {"City": "Ahmedabad", "Total_Budget": 15502, "Population": 8500000, "Area_sq_km": 505, "Per_Capita_Budget": 18238, "Budget_Density": 30.7},
                {"City": "Vadodara", "Total_Budget": 6220, "Population": 2200000, "Area_sq_km": 400, "Per_Capita_Budget": 28273, "Budget_Density": 15.6},
                {"City": "Surat", "Total_Budget": 10004, "Population": 7500000, "Area_sq_km": 327, "Per_Capita_Budget": 13339, "Budget_Density": 30.6},
                {"City": "Rajkot", "Total_Budget": 3112, "Population": 1900000, "Area_sq_km": 325, "Per_Capita_Budget": 16379, "Budget_Density": 9.6},
                {"City": "Bhavnagar", "Total_Budget": 850, "Population": 650000, "Area_sq_km": 210, "Per_Capita_Budget": 13077, "Budget_Density": 4.0},
                {"City": "Gandhinagar", "Total_Budget": 650, "Population": 350000, "Area_sq_km": 205, "Per_Capita_Budget": 18571, "Budget_Density": 3.2}
            ],
            revenue_breakdown: [
                {"City": "Ahmedabad", "Tax_Revenue": 9500, "Non_Tax_Revenue": 6002, "Property_Tax": 2500, "Octroi_Grants": 3600, "Water_Charges": 1300, "Sanitation_Charges": 1130, "Business_Tax": 970},
                {"City": "Vadodara", "Tax_Revenue": 3800, "Non_Tax_Revenue": 2420, "Property_Tax": 950, "Octroi_Grants": 1400, "Water_Charges": 520, "Sanitation_Charges": 450, "Business_Tax": 380},
                {"City": "Surat", "Tax_Revenue": 6100, "Non_Tax_Revenue": 3904, "Property_Tax": 2000, "Octroi_Grants": 2800, "Water_Charges": 850, "Sanitation_Charges": 750, "Business_Tax": 700},
                {"City": "Rajkot", "Tax_Revenue": 1900, "Non_Tax_Revenue": 1212, "Property_Tax": 450, "Octroi_Grants": 700, "Water_Charges": 260, "Sanitation_Charges": 230, "Business_Tax": 190},
                {"City": "Bhavnagar", "Tax_Revenue": 520, "Non_Tax_Revenue": 330, "Property_Tax": 130, "Octroi_Grants": 200, "Water_Charges": 70, "Sanitation_Charges": 60, "Business_Tax": 50},
                {"City": "Gandhinagar", "Tax_Revenue": 400, "Non_Tax_Revenue": 250, "Property_Tax": 100, "Octroi_Grants": 150, "Water_Charges": 50, "Sanitation_Charges": 45, "Business_Tax": 40}
            ],
            expenditure_breakdown: [
                {"City": "Ahmedabad", "Operational_Expenses": 9300, "Capital_Expenditure": 6202, "Infrastructure_Spending": 4650, "Admin_Expenses": 2480, "O_M_Expenses": 2850, "Debt_Service": 1090, "Climate_Budget": 5620},
                {"City": "Vadodara", "Operational_Expenses": 3750, "Capital_Expenditure": 2470, "Infrastructure_Spending": 1866, "Admin_Expenses": 1000, "O_M_Expenses": 1145, "Debt_Service": 438, "Climate_Budget": 450},
                {"City": "Surat", "Operational_Expenses": 6002, "Capital_Expenditure": 4002, "Infrastructure_Spending": 3001, "Admin_Expenses": 1600, "O_M_Expenses": 1850, "Debt_Service": 700, "Climate_Budget": 650},
                {"City": "Rajkot", "Operational_Expenses": 1870, "Capital_Expenditure": 1242, "Infrastructure_Spending": 933, "Admin_Expenses": 500, "O_M_Expenses": 572, "Debt_Service": 219, "Climate_Budget": 280},
                {"City": "Bhavnagar", "Operational_Expenses": 510, "Capital_Expenditure": 340, "Infrastructure_Spending": 255, "Admin_Expenses": 136, "O_M_Expenses": 156, "Debt_Service": 60, "Climate_Budget": 85},
                {"City": "Gandhinagar", "Operational_Expenses": 390, "Capital_Expenditure": 260, "Infrastructure_Spending": 195, "Admin_Expenses": 104, "O_M_Expenses": 120, "Debt_Service": 46, "Climate_Budget": 65}
            ],
            department_allocation: [
                {"City": "Ahmedabad", "Roads_Infrastructure": 25.5, "Water_Supply": 18.3, "Sanitation_Waste": 16.8, "Education": 12.2, "Health": 8.5, "Fire_Safety": 2.1, "Urban_Planning": 6.4, "Administration": 10.2},
                {"City": "Vadodara", "Roads_Infrastructure": 28.2, "Water_Supply": 19.5, "Sanitation_Waste": 18.1, "Education": 11.8, "Health": 8.8, "Fire_Safety": 2.3, "Urban_Planning": 5.8, "Administration": 5.5},
                {"City": "Surat", "Roads_Infrastructure": 27.8, "Water_Supply": 19.8, "Sanitation_Waste": 17.2, "Education": 11.5, "Health": 9.5, "Fire_Safety": 2.8, "Urban_Planning": 5.2, "Administration": 6.2},
                {"City": "Rajkot", "Roads_Infrastructure": 30.1, "Water_Supply": 20.2, "Sanitation_Waste": 17.5, "Education": 11.5, "Health": 9.2, "Fire_Safety": 5.8, "Urban_Planning": 3.2, "Administration": 2.5},
                {"City": "Bhavnagar", "Roads_Infrastructure": 32.0, "Water_Supply": 21.0, "Sanitation_Waste": 19.2, "Education": 10.8, "Health": 8.5, "Fire_Safety": 2.0, "Urban_Planning": 3.5, "Administration": 3.0},
                {"City": "Gandhinagar", "Roads_Infrastructure": 29.5, "Water_Supply": 20.5, "Sanitation_Waste": 18.0, "Education": 11.2, "Health": 9.0, "Fire_Safety": 2.2, "Urban_Planning": 4.8, "Administration": 4.8}
            ],
            climate_budget: [
                {"City": "Ahmedabad", "Climate_Budget": 5620, "Renewable_Energy": 1800, "Green_Infrastructure": 1404, "Waste_Management": 843, "Water_Conservation": 702, "Air_Quality": 561, "Climate_Adaptation": 310},
                {"City": "Vadodara", "Climate_Budget": 450, "Renewable_Energy": 135, "Green_Infrastructure": 113, "Waste_Management": 68, "Water_Conservation": 56, "Air_Quality": 45, "Climate_Adaptation": 25},
                {"City": "Surat", "Climate_Budget": 650, "Renewable_Energy": 195, "Green_Infrastructure": 163, "Waste_Management": 98, "Water_Conservation": 81, "Air_Quality": 65, "Climate_Adaptation": 36},
                {"City": "Rajkot", "Climate_Budget": 280, "Renewable_Energy": 84, "Green_Infrastructure": 70, "Waste_Management": 42, "Water_Conservation": 35, "Air_Quality": 28, "Climate_Adaptation": 15},
                {"City": "Bhavnagar", "Climate_Budget": 85, "Renewable_Energy": 26, "Green_Infrastructure": 21, "Waste_Management": 13, "Water_Conservation": 11, "Air_Quality": 8, "Climate_Adaptation": 5},
                {"City": "Gandhinagar", "Climate_Budget": 65, "Renewable_Energy": 20, "Green_Infrastructure": 16, "Waste_Management": 10, "Water_Conservation": 8, "Air_Quality": 6, "Climate_Adaptation": 4}
            ],
            debt_management: [
                {"City": "Ahmedabad", "Total_Debt": 12500, "Debt_Service": 1090, "Debt_to_Revenue_Ratio": 80.6, "Per_Capita_Debt": 1471},
                {"City": "Vadodara", "Total_Debt": 4200, "Debt_Service": 438, "Debt_to_Revenue_Ratio": 67.5, "Per_Capita_Debt": 1909},
                {"City": "Surat", "Total_Debt": 8000, "Debt_Service": 700, "Debt_to_Revenue_Ratio": 80.0, "Per_Capita_Debt": 1067},
                {"City": "Rajkot", "Total_Debt": 2100, "Debt_Service": 219, "Debt_to_Revenue_Ratio": 67.5, "Per_Capita_Debt": 1105},
                {"City": "Bhavnagar", "Total_Debt": 580, "Debt_Service": 60, "Debt_to_Revenue_Ratio": 68.2, "Per_Capita_Debt": 892},
                {"City": "Gandhinagar", "Total_Debt": 450, "Debt_Service": 46, "Debt_to_Revenue_Ratio": 69.2, "Per_Capita_Debt": 1286}
            ],
            yoy_comparison: [
                {"City": "Ahmedabad", "Budget_2024_25": 14000, "Budget_2025_26": 15502, "Growth_Rate": 10.7, "Per_Capita_2024_25": 16471, "Per_Capita_2025_26": 18238},
                {"City": "Vadodara", "Budget_2024_25": 5800, "Budget_2025_26": 6220, "Growth_Rate": 7.2, "Per_Capita_2024_25": 26364, "Per_Capita_2025_26": 28273},
                {"City": "Surat", "Budget_2024_25": 8873, "Budget_2025_26": 10004, "Growth_Rate": 12.7, "Per_Capita_2024_25": 11831, "Per_Capita_2025_26": 13339},
                {"City": "Rajkot", "Budget_2024_25": 2900, "Budget_2025_26": 3112, "Growth_Rate": 7.3, "Per_Capita_2024_25": 15263, "Per_Capita_2025_26": 16379},
                {"City": "Bhavnagar", "Budget_2024_25": 800, "Budget_2025_26": 850, "Growth_Rate": 6.3, "Per_Capita_2024_25": 12308, "Per_Capita_2025_26": 13077},
                {"City": "Gandhinagar", "Budget_2024_25": 600, "Budget_2025_26": 650, "Growth_Rate": 8.3, "Per_Capita_2024_25": 17143, "Per_Capita_2025_26": 18571}
            ]
        };

        this.charts = {};
        this.colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];
        this.selectedCity = 'all';
        this.currentSection = 'overview';
        
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupFilters();
        this.updateMetrics();
        this.initializeCharts();
    }

    // CSV Export Utilities
    escapeCSVValue(value) {
        if (value === null || value === undefined) return '';
        const str = String(value);
        if (str.includes(',') || str.includes('"') || str.includes('\n')) {
            return '"' + str.replace(/"/g, '""') + '"';
        }
        return str;
    }

    convertToCSV(data, headers = null) {
        if (!data || data.length === 0) return '';
        
        const csvHeaders = headers || Object.keys(data[0]);
        const headerRow = csvHeaders.map(header => this.escapeCSVValue(header)).join(',');
        
        const dataRows = data.map(row => {
            return csvHeaders.map(header => this.escapeCSVValue(row[header])).join(',');
        });
        
        return headerRow + '\n' + dataRows.join('\n');
    }

    downloadCSV(csvContent, filename) {
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }
    }

    showExportToast(message = 'Data exported successfully!') {
        const toast = document.getElementById('exportToast');
        const messageElement = document.getElementById('toastMessage');
        
        if (toast && messageElement) {
            messageElement.textContent = message;
            toast.classList.remove('hidden');
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => {
                    toast.classList.add('hidden');
                }, 300);
            }, 3000);
        }
    }

    generateTimestamp() {
        const now = new Date();
        return now.toISOString().split('T')[0];
    }

    // Export Methods for each section
    exportOverviewData() {
        const filteredData = this.getFilteredData('budget_overview');
        const csvContent = this.convertToCSV(filteredData);
        const cityFilter = this.selectedCity === 'all' ? 'All_Cities' : this.selectedCity;
        const filename = `Gujarat_Budget_Overview_${cityFilter}_${this.generateTimestamp()}.csv`;
        
        this.downloadCSV(csvContent, filename);
        this.showExportToast(`Budget overview data exported for ${cityFilter === 'All_Cities' ? 'all cities' : cityFilter}`);
    }

    exportRevenueData() {
        const filteredData = this.getFilteredData('revenue_breakdown');
        
        // Include calculated percentages
        const enrichedData = filteredData.map(city => {
            const totalRevenue = city.Tax_Revenue + city.Non_Tax_Revenue;
            return {
                ...city,
                Total_Revenue: totalRevenue,
                Tax_Revenue_Percentage: ((city.Tax_Revenue / totalRevenue) * 100).toFixed(2),
                Non_Tax_Revenue_Percentage: ((city.Non_Tax_Revenue / totalRevenue) * 100).toFixed(2),
                Property_Tax_Share_of_Tax_Revenue: ((city.Property_Tax / city.Tax_Revenue) * 100).toFixed(2)
            };
        });
        
        const csvContent = this.convertToCSV(enrichedData);
        const cityFilter = this.selectedCity === 'all' ? 'All_Cities' : this.selectedCity;
        const filename = `Gujarat_Revenue_Analysis_${cityFilter}_${this.generateTimestamp()}.csv`;
        
        this.downloadCSV(csvContent, filename);
        this.showExportToast(`Revenue analysis data exported for ${cityFilter === 'All_Cities' ? 'all cities' : cityFilter}`);
    }

    exportExpenditureData() {
        const filteredData = this.getFilteredData('expenditure_breakdown');
        
        // Include calculated ratios and percentages
        const enrichedData = filteredData.map(city => {
            const totalExpenditure = city.Operational_Expenses + city.Capital_Expenditure;
            return {
                ...city,
                Total_Expenditure: totalExpenditure,
                Operational_Percentage: ((city.Operational_Expenses / totalExpenditure) * 100).toFixed(2),
                Capital_Percentage: ((city.Capital_Expenditure / totalExpenditure) * 100).toFixed(2),
                Infrastructure_Efficiency: ((city.Infrastructure_Spending / city.Capital_Expenditure) * 100).toFixed(2),
                Admin_Expense_Ratio: ((city.Admin_Expenses / totalExpenditure) * 100).toFixed(2),
                Debt_Service_Ratio: ((city.Debt_Service / totalExpenditure) * 100).toFixed(2)
            };
        });
        
        const csvContent = this.convertToCSV(enrichedData);
        const cityFilter = this.selectedCity === 'all' ? 'All_Cities' : this.selectedCity;
        const filename = `Gujarat_Expenditure_Analysis_${cityFilter}_${this.generateTimestamp()}.csv`;
        
        this.downloadCSV(csvContent, filename);
        this.showExportToast(`Expenditure analysis data exported for ${cityFilter === 'All_Cities' ? 'all cities' : cityFilter}`);
    }

    exportDepartmentData() {
        const filteredData = this.getFilteredData('department_allocation');
        const selectedDept = document.getElementById('departmentFilter')?.value || 'all';
        
        let exportData;
        let filename;
        let message;
        
        if (selectedDept === 'all') {
            // Export all department data
            exportData = filteredData;
            const cityFilter = this.selectedCity === 'all' ? 'All_Cities' : this.selectedCity;
            filename = `Gujarat_Department_Allocation_${cityFilter}_${this.generateTimestamp()}.csv`;
            message = `Department allocation data exported for ${cityFilter === 'All_Cities' ? 'all cities' : cityFilter}`;
        } else {
            // Export specific department data
            exportData = filteredData.map(city => ({
                City: city.City,
                Department: selectedDept.replace('_', ' & '),
                Budget_Allocation_Percentage: city[selectedDept]
            }));
            const cityFilter = this.selectedCity === 'all' ? 'All_Cities' : this.selectedCity;
            filename = `Gujarat_${selectedDept}_Department_${cityFilter}_${this.generateTimestamp()}.csv`;
            message = `${selectedDept.replace('_', ' & ')} department data exported`;
        }
        
        const csvContent = this.convertToCSV(exportData);
        this.downloadCSV(csvContent, filename);
        this.showExportToast(message);
    }

    exportClimateData() {
        const filteredData = this.getFilteredData('climate_budget');
        
        // Include percentages and per capita calculations
        const enrichedData = filteredData.map(city => {
            const budgetOverview = this.data.budget_overview.find(b => b.City === city.City);
            return {
                ...city,
                Climate_Budget_Percentage_of_Total: ((city.Climate_Budget / budgetOverview.Total_Budget) * 100).toFixed(2),
                Climate_Budget_Per_Capita: (city.Climate_Budget * 10000000 / budgetOverview.Population).toFixed(2),
                Renewable_Energy_Percentage: ((city.Renewable_Energy / city.Climate_Budget) * 100).toFixed(2),
                Green_Infrastructure_Percentage: ((city.Green_Infrastructure / city.Climate_Budget) * 100).toFixed(2),
                Waste_Management_Percentage: ((city.Waste_Management / city.Climate_Budget) * 100).toFixed(2)
            };
        });
        
        const csvContent = this.convertToCSV(enrichedData);
        const cityFilter = this.selectedCity === 'all' ? 'All_Cities' : this.selectedCity;
        const filename = `Gujarat_Climate_Budget_${cityFilter}_${this.generateTimestamp()}.csv`;
        
        this.downloadCSV(csvContent, filename);
        this.showExportToast(`Climate budget data exported for ${cityFilter === 'All_Cities' ? 'all cities' : cityFilter}`);
    }

    exportDebtData() {
        const filteredData = this.getFilteredData('debt_management');
        
        // Include debt sustainability indicators
        const enrichedData = filteredData.map(city => {
            const budgetOverview = this.data.budget_overview.find(b => b.City === city.City);
            return {
                ...city,
                Debt_Per_Capita_as_Percentage_of_Budget: ((city.Per_Capita_Debt / budgetOverview.Per_Capita_Budget) * 100).toFixed(2),
                Debt_Sustainability_Status: city.Debt_to_Revenue_Ratio > 80 ? 'High Risk' : 
                                          city.Debt_to_Revenue_Ratio > 70 ? 'Moderate Risk' : 'Low Risk',
                Debt_Service_Coverage_Ratio: ((city.Total_Debt / city.Debt_Service)).toFixed(2)
            };
        });
        
        const csvContent = this.convertToCSV(enrichedData);
        const cityFilter = this.selectedCity === 'all' ? 'All_Cities' : this.selectedCity;
        const filename = `Gujarat_Debt_Management_${cityFilter}_${this.generateTimestamp()}.csv`;
        
        this.downloadCSV(csvContent, filename);
        this.showExportToast(`Debt management data exported for ${cityFilter === 'All_Cities' ? 'all cities' : cityFilter}`);
    }

    exportTrendsData() {
        const filteredData = this.getFilteredData('yoy_comparison');
        
        // Include additional trend analysis
        const enrichedData = filteredData.map(city => {
            const absoluteGrowth = city.Budget_2025_26 - city.Budget_2024_25;
            const perCapitaGrowth = city.Per_Capita_2025_26 - city.Per_Capita_2024_25;
            return {
                ...city,
                Absolute_Growth_Amount: absoluteGrowth,
                Per_Capita_Growth_Amount: perCapitaGrowth,
                Per_Capita_Growth_Rate: ((perCapitaGrowth / city.Per_Capita_2024_25) * 100).toFixed(2),
                Growth_Performance: city.Growth_Rate > 10 ? 'High Growth' : 
                                  city.Growth_Rate > 7 ? 'Moderate Growth' : 'Low Growth'
            };
        });
        
        const csvContent = this.convertToCSV(enrichedData);
        const cityFilter = this.selectedCity === 'all' ? 'All_Cities' : this.selectedCity;
        const filename = `Gujarat_YoY_Trends_${cityFilter}_${this.generateTimestamp()}.csv`;
        
        this.downloadCSV(csvContent, filename);
        this.showExportToast(`Year-over-year trends data exported for ${cityFilter === 'All_Cities' ? 'all cities' : cityFilter}`);
    }

    // Get filtered data based on selected city
    getFilteredData(dataType) {
        if (this.selectedCity === 'all') {
            return this.data[dataType];
        }
        return this.data[dataType].filter(item => item.City === this.selectedCity);
    }

    // Update metrics cards based on selected city
    updateMetrics() {
        const filteredBudgetData = this.getFilteredData('budget_overview');
        const filteredYoyData = this.getFilteredData('yoy_comparison');

        if (this.selectedCity === 'all') {
            // Show combined metrics for all cities
            const totalBudget = filteredBudgetData.reduce((sum, city) => sum + city.Total_Budget, 0);
            const avgPerCapita = Math.round(filteredBudgetData.reduce((sum, city) => sum + city.Per_Capita_Budget, 0) / filteredBudgetData.length);
            const avgGrowthRate = (filteredYoyData.reduce((sum, city) => sum + city.Growth_Rate, 0) / filteredYoyData.length).toFixed(1);

            document.getElementById('totalBudget').textContent = `₹${totalBudget.toLocaleString()}`;
            document.getElementById('avgPerCapita').textContent = `₹${avgPerCapita.toLocaleString()}`;
            document.getElementById('citiesAnalyzed').textContent = filteredBudgetData.length;
            document.getElementById('avgGrowthRate').textContent = `${avgGrowthRate}%`;

            // Update section descriptions
            document.getElementById('section-description').textContent = 'Comprehensive analysis of municipal budgets across six major Gujarat cities';
            this.updateChartTitles();
        } else {
            // Show metrics for selected city
            const cityBudget = filteredBudgetData[0];
            const cityYoy = filteredYoyData[0];

            document.getElementById('totalBudget').textContent = `₹${cityBudget.Total_Budget.toLocaleString()}`;
            document.getElementById('avgPerCapita').textContent = `₹${cityBudget.Per_Capita_Budget.toLocaleString()}`;
            document.getElementById('citiesAnalyzed').textContent = '1';
            document.getElementById('avgGrowthRate').textContent = `${cityYoy.Growth_Rate}%`;

            // Update section descriptions
            document.getElementById('section-description').textContent = `Detailed budget analysis for ${this.selectedCity} Municipal Corporation`;
            this.updateChartTitles(this.selectedCity);
        }
    }

    // Update chart titles based on filter
    updateChartTitles(cityName = null) {
        const suffix = cityName ? ` - ${cityName}` : '';
        
        const elements = [
            'budgetComparisonTitle', 'perCapitaTitle', 'budgetDensityTitle',
            'revenueBreakdownTitle', 'revenueCompositionTitle', 'propertyTaxTitle',
            'expenditureBreakdownTitle', 'infrastructureTitle', 'efficiencyTitle',
            'departmentAllocationTitle', 'departmentComparisonTitle',
            'climateBudgetTitle', 'climateDistributionTitle',
            'debtRevenueTitle', 'perCapitaDebtTitle',
            'growthRateTitle', 'budgetTrendsTitle'
        ];

        const titles = {
            'budgetComparisonTitle': `Total Budget${cityName ? ' Overview' : ' Comparison'}${suffix}`,
            'perCapitaTitle': `Per Capita Budget${suffix}`,
            'budgetDensityTitle': `Budget Density${suffix}`,
            'revenueBreakdownTitle': `Tax vs Non-Tax Revenue${suffix}`,
            'revenueCompositionTitle': `Revenue Composition${suffix}`,
            'propertyTaxTitle': `Property Tax Share${suffix}`,
            'expenditureBreakdownTitle': `Operational vs Capital Expenditure${suffix}`,
            'infrastructureTitle': `Infrastructure Spending${suffix}`,
            'efficiencyTitle': `Expenditure Efficiency${suffix}`,
            'departmentAllocationTitle': `Department Budget Allocation${suffix}`,
            'departmentComparisonTitle': `Department Comparison${suffix}`,
            'climateBudgetTitle': `Climate Budget${suffix}`,
            'climateDistributionTitle': `Climate Budget Distribution${suffix}`,
            'debtRevenueTitle': `Debt-to-Revenue Ratio${suffix}`,
            'perCapitaDebtTitle': `Per Capita Debt${suffix}`,
            'growthRateTitle': `Budget Growth Rate${suffix}`,
            'budgetTrendsTitle': `Budget Trends${suffix}`
        };

        elements.forEach(elementId => {
            const element = document.getElementById(elementId);
            if (element && titles[elementId]) {
                element.textContent = titles[elementId];
            }
        });
    }

    setupNavigation() {
        const navTabs = document.querySelectorAll('.nav-tab');
        const sections = document.querySelectorAll('.dashboard-section');

        navTabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const targetSection = tab.getAttribute('data-section');
                console.log('Clicked tab:', targetSection);
                
                if (!targetSection) return;
                
                // Remove active class from all tabs and sections
                navTabs.forEach(t => t.classList.remove('active'));
                sections.forEach(s => s.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Add active class to corresponding section
                const targetSectionElement = document.getElementById(targetSection);
                if (targetSectionElement) {
                    targetSectionElement.classList.add('active');
                    this.currentSection = targetSection;
                    
                    // Initialize charts for the active section after a short delay
                    setTimeout(() => {
                        this.initializeSectionCharts(targetSection);
                    }, 150);
                } else {
                    console.error('Target section not found:', targetSection);
                }
            });
        });
    }

    setupFilters() {
        const cityFilter = document.getElementById('cityFilter');
        const departmentFilter = document.getElementById('departmentFilter');

        if (cityFilter) {
            cityFilter.addEventListener('change', (e) => {
                console.log('City filter changed to:', e.target.value);
                this.selectedCity = e.target.value;
                this.updateMetrics();
                this.updateAllCharts();
            });
        }

        if (departmentFilter) {
            departmentFilter.addEventListener('change', () => {
                this.updateDepartmentCharts();
            });
        }
    }

    // Update all visible charts when city filter changes
    updateAllCharts() {
        const activeSection = document.querySelector('.dashboard-section.active');
        if (activeSection) {
            const sectionId = activeSection.id;
            setTimeout(() => {
                this.initializeSectionCharts(sectionId);
            }, 100);
        }
    }

    initializeCharts() {
        // Initialize charts for the overview section (default active)
        setTimeout(() => {
            this.initializeSectionCharts('overview');
        }, 100);
    }

    initializeSectionCharts(section) {
        console.log('Initializing charts for section:', section);
        
        switch(section) {
            case 'overview':
                this.createBudgetComparisonChart();
                this.createPerCapitaChart();
                this.createBudgetDensityChart();
                break;
            case 'revenue':
                this.createRevenueBreakdownChart();
                this.createRevenueCompositionChart();
                this.createPropertyTaxChart();
                break;
            case 'expenditure':
                this.createExpenditureBreakdownChart();
                this.createInfrastructureChart();
                this.createEfficiencyChart();
                break;
            case 'departments':
                this.createDepartmentAllocationChart();
                this.updateDepartmentCharts();
                break;
            case 'climate':
                this.createClimateBudgetChart();
                this.createClimateDistributionChart();
                break;
            case 'debt':
                this.createDebtRevenueChart();
                this.createPerCapitaDebtChart();
                break;
            case 'trends':
                this.createGrowthRateChart();
                this.createBudgetTrendsChart();
                break;
        }
    }

    destroyChart(chartId) {
        if (this.charts[chartId]) {
            this.charts[chartId].destroy();
            delete this.charts[chartId];
        }
    }

    createBudgetComparisonChart() {
        this.destroyChart('budgetComparison');
        const ctx = document.getElementById('budgetComparisonChart');
        if (!ctx) return;
        
        const data = this.getFilteredData('budget_overview');
        
        this.charts.budgetComparison = new Chart(ctx.getContext('2d'), {
            type: this.selectedCity === 'all' ? 'bar' : 'doughnut',
            data: {
                labels: this.selectedCity === 'all' ? data.map(d => d.City) : ['Total Budget'],
                datasets: [{
                    label: 'Total Budget (₹ Crores)',
                    data: this.selectedCity === 'all' ? data.map(d => d.Total_Budget) : [data[0].Total_Budget],
                    backgroundColor: this.selectedCity === 'all' ? this.colors.slice(0, data.length) : [this.colors[0]],
                    borderRadius: this.selectedCity === 'all' ? 8 : 0,
                    borderSkipped: false,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: this.selectedCity !== 'all',
                        position: 'bottom'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const value = context.parsed.y || context.parsed;
                                return `Budget: ₹${value.toLocaleString()} crores`;
                            }
                        }
                    }
                },
                scales: this.selectedCity === 'all' ? {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '₹' + value.toLocaleString();
                            }
                        }
                    }
                } : {}
            }
        });
    }

    createPerCapitaChart() {
        this.destroyChart('perCapita');
        const ctx = document.getElementById('perCapitaChart');
        if (!ctx) return;
        
        const data = this.getFilteredData('budget_overview');
        
        this.charts.perCapita = new Chart(ctx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: data.map(d => d.City),
                datasets: [{
                    data: data.map(d => d.Per_Capita_Budget),
                    backgroundColor: this.colors.slice(0, data.length),
                    borderWidth: 0,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const value = context.parsed;
                                return `${context.label}: ₹${value.toLocaleString()}`;
                            }
                        }
                    }
                }
            }
        });
    }

    createBudgetDensityChart() {
        this.destroyChart('budgetDensity');
        const ctx = document.getElementById('budgetDensityChart');
        if (!ctx) return;
        
        const data = this.getFilteredData('budget_overview');
        
        this.charts.budgetDensity = new Chart(ctx.getContext('2d'), {
            type: this.selectedCity === 'all' ? 'line' : 'bar',
            data: {
                labels: data.map(d => d.City),
                datasets: [{
                    label: 'Budget Density (₹ Crores/sq km)',
                    data: data.map(d => d.Budget_Density),
                    borderColor: this.colors[0],
                    backgroundColor: this.selectedCity === 'all' ? this.colors[0] + '20' : this.colors[0],
                    borderWidth: this.selectedCity === 'all' ? 3 : 0,
                    fill: this.selectedCity === 'all',
                    tension: 0.4,
                    pointBackgroundColor: this.colors[0],
                    pointRadius: this.selectedCity === 'all' ? 6 : 0,
                    pointHoverRadius: this.selectedCity === 'all' ? 8 : 0,
                    borderRadius: this.selectedCity === 'all' ? 0 : 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Density: ₹${context.parsed.y.toFixed(1)} crores/sq km`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '₹' + value.toFixed(1);
                            }
                        }
                    }
                }
            }
        });
    }

    createRevenueBreakdownChart() {
        this.destroyChart('revenueBreakdown');
        const ctx = document.getElementById('revenueBreakdownChart');
        if (!ctx) return;
        
        const data = this.getFilteredData('revenue_breakdown');
        
        this.charts.revenueBreakdown = new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: data.map(d => d.City),
                datasets: [
                    {
                        label: 'Tax Revenue',
                        data: data.map(d => d.Tax_Revenue),
                        backgroundColor: this.colors[0],
                        borderRadius: 8,
                    },
                    {
                        label: 'Non-Tax Revenue',
                        data: data.map(d => d.Non_Tax_Revenue),
                        backgroundColor: this.colors[1],
                        borderRadius: 8,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        stacked: this.selectedCity === 'all',
                    },
                    y: {
                        stacked: this.selectedCity === 'all',
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '₹' + value.toLocaleString();
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ₹${context.parsed.y.toLocaleString()} crores`;
                            }
                        }
                    }
                }
            }
        });
    }

    createRevenueCompositionChart() {
        this.destroyChart('revenueComposition');
        const ctx = document.getElementById('revenueCompositionChart');
        if (!ctx) return;
        
        const data = this.getFilteredData('revenue_breakdown');
        
        // Calculate total revenue composition
        const totalRevenue = data.reduce((acc, city) => {
            acc.tax += city.Tax_Revenue;
            acc.nonTax += city.Non_Tax_Revenue;
            return acc;
        }, { tax: 0, nonTax: 0 });
        
        this.charts.revenueComposition = new Chart(ctx.getContext('2d'), {
            type: 'pie',
            data: {
                labels: ['Tax Revenue', 'Non-Tax Revenue'],
                datasets: [{
                    data: [totalRevenue.tax, totalRevenue.nonTax],
                    backgroundColor: [this.colors[0], this.colors[1]],
                    borderWidth: 0,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const value = context.parsed;
                                const total = totalRevenue.tax + totalRevenue.nonTax;
                                const percentage = ((value / total) * 100).toFixed(1);
                                return `${context.label}: ₹${value.toLocaleString()} crores (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }

    createPropertyTaxChart() {
        this.destroyChart('propertyTax');
        const ctx = document.getElementById('propertyTaxChart');
        if (!ctx) return;
        
        const data = this.getFilteredData('revenue_breakdown');
        
        this.charts.propertyTax = new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: data.map(d => d.City),
                datasets: [{
                    label: 'Property Tax Share (%)',
                    data: data.map(d => ((d.Property_Tax / d.Tax_Revenue) * 100)),
                    backgroundColor: this.colors[2],
                    borderRadius: 8,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Property Tax Share: ${context.parsed.y.toFixed(1)}%`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }

    createExpenditureBreakdownChart() {
        this.destroyChart('expenditureBreakdown');
        const ctx = document.getElementById('expenditureBreakdownChart');
        if (!ctx) return;
        
        const data = this.getFilteredData('expenditure_breakdown');
        
        this.charts.expenditureBreakdown = new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: data.map(d => d.City),
                datasets: [
                    {
                        label: 'Operational Expenses',
                        data: data.map(d => d.Operational_Expenses),
                        backgroundColor: this.colors[3],
                        borderRadius: 8,
                    },
                    {
                        label: 'Capital Expenditure',
                        data: data.map(d => d.Capital_Expenditure),
                        backgroundColor: this.colors[4],
                        borderRadius: 8,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ₹${context.parsed.y.toLocaleString()} crores`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '₹' + value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
    }

    createInfrastructureChart() {
        this.destroyChart('infrastructure');
        const ctx = document.getElementById('infrastructureChart');
        if (!ctx) return;
        
        const data = this.getFilteredData('expenditure_breakdown');
        
        this.charts.infrastructure = new Chart(ctx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: data.map(d => d.City),
                datasets: [{
                    data: data.map(d => d.Infrastructure_Spending),
                    backgroundColor: this.colors.slice(0, data.length),
                    borderWidth: 0,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            padding: 15,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const value = context.parsed;
                                return `${context.label}: ₹${value.toLocaleString()} crores`;
                            }
                        }
                    }
                }
            }
        });
    }

    createEfficiencyChart() {
        this.destroyChart('efficiency');
        const ctx = document.getElementById('efficiencyChart');
        if (!ctx) return;
        
        const data = this.getFilteredData('expenditure_breakdown');
        
        this.charts.efficiency = new Chart(ctx.getContext('2d'), {
            type: this.selectedCity === 'all' ? 'radar' : 'bar',
            data: this.selectedCity === 'all' ? {
                labels: ['Infrastructure Efficiency', 'Admin Efficiency', 'O&M Efficiency', 'Debt Service Ratio'],
                datasets: data.map((city, index) => ({
                    label: city.City,
                    data: [
                        (city.Infrastructure_Spending / city.Capital_Expenditure) * 100,
                        100 - (city.Admin_Expenses / (city.Operational_Expenses + city.Capital_Expenditure)) * 100,
                        100 - (city.O_M_Expenses / city.Operational_Expenses) * 100,
                        100 - (city.Debt_Service / (city.Operational_Expenses + city.Capital_Expenditure)) * 100
                    ],
                    backgroundColor: this.colors[index] + '30',
                    borderColor: this.colors[index],
                    borderWidth: 2,
                    pointBackgroundColor: this.colors[index]
                }))
            } : {
                labels: ['Infrastructure Efficiency', 'Admin Efficiency', 'O&M Efficiency', 'Debt Service Ratio'],
                datasets: [{
                    label: 'Efficiency %',
                    data: [
                        (data[0].Infrastructure_Spending / data[0].Capital_Expenditure) * 100,
                        100 - (data[0].Admin_Expenses / (data[0].Operational_Expenses + data[0].Capital_Expenditure)) * 100,
                        100 - (data[0].O_M_Expenses / data[0].Operational_Expenses) * 100,
                        100 - (data[0].Debt_Service / (data[0].Operational_Expenses + data[0].Capital_Expenditure)) * 100
                    ],
                    backgroundColor: this.colors[0],
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: this.selectedCity === 'all' ? {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20
                        }
                    }
                } : {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: this.selectedCity === 'all' ? 'bottom' : 'top',
                    }
                }
            }
        });
    }

    createDepartmentAllocationChart() {
        this.destroyChart('departmentAllocation');
        const ctx = document.getElementById('departmentAllocationChart');
        if (!ctx) return;
        
        const data = this.getFilteredData('department_allocation');
        const departments = ['Roads_Infrastructure', 'Water_Supply', 'Sanitation_Waste', 'Education', 'Health', 'Fire_Safety', 'Urban_Planning', 'Administration'];
        
        this.charts.departmentAllocation = new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: departments.map(dept => dept.replace('_', ' & ')),
                datasets: data.map((city, index) => ({
                    label: city.City,
                    data: departments.map(dept => city[dept]),
                    backgroundColor: this.colors[index],
                    borderRadius: 4,
                }))
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        ticks: {
                            maxRotation: 45,
                            minRotation: 45
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                        display: this.selectedCity === 'all'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.parsed.y.toFixed(1)}%`;
                            }
                        }
                    }
                }
            }
        });
    }

    updateDepartmentCharts() {
        const selectedDept = document.getElementById('departmentFilter')?.value || 'Roads_Infrastructure';
        this.createDepartmentComparisonChart(selectedDept);
    }

    createDepartmentComparisonChart(selectedDept = 'Roads_Infrastructure') {
        this.destroyChart('departmentComparison');
        const ctx = document.getElementById('departmentComparisonChart');
        if (!ctx) return;
        
        const data = this.getFilteredData('department_allocation');
        
        if (selectedDept === 'all') {
            // Show all departments for comparison
            const departments = ['Roads_Infrastructure', 'Water_Supply', 'Sanitation_Waste', 'Education', 'Health'];
            
            this.charts.departmentComparison = new Chart(ctx.getContext('2d'), {
                type: 'line',
                data: {
                    labels: data.map(d => d.City),
                    datasets: departments.map((dept, index) => ({
                        label: dept.replace('_', ' & '),
                        data: data.map(city => city[dept]),
                        borderColor: this.colors[index],
                        backgroundColor: this.colors[index] + '20',
                        borderWidth: 3,
                        tension: 0.4,
                        pointRadius: 4,
                        pointHoverRadius: 6
                    }))
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                }
                            }
                        }
                    }
                }
            });
        } else {
            // Show specific department comparison
            this.charts.departmentComparison = new Chart(ctx.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: data.map(d => d.City),
                    datasets: [{
                        label: selectedDept.replace('_', ' & '),
                        data: data.map(city => city[selectedDept]),
                        backgroundColor: this.colors.slice(0, data.length),
                        borderRadius: 8,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return `${selectedDept.replace('_', ' & ')}: ${context.parsed.y.toFixed(1)}%`;
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                }
                            }
                        }
                    }
                }
            });
        }
    }

    createClimateBudgetChart() {
        this.destroyChart('climateBudget');
        const ctx = document.getElementById('climateBudgetChart');
        if (!ctx) return;
        
        const data = this.getFilteredData('climate_budget');
        
        this.charts.climateBudget = new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: data.map(d => d.City),
                datasets: [{
                    label: 'Climate Budget (₹ Crores)',
                    data: data.map(d => d.Climate_Budget),
                    backgroundColor: this.colors[5],
                    borderRadius: 8,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Climate Budget: ₹${context.parsed.y.toLocaleString()} crores`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '₹' + value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
    }

    createClimateDistributionChart() {
        this.destroyChart('climateDistribution');
        const ctx = document.getElementById('climateDistributionChart');
        if (!ctx) return;
        
        const data = this.getFilteredData('climate_budget');
        
        // Calculate total climate budget by category
        const categories = ['Renewable_Energy', 'Green_Infrastructure', 'Waste_Management', 'Water_Conservation', 'Air_Quality', 'Climate_Adaptation'];
        const totals = categories.map(category => 
            data.reduce((sum, city) => sum + city[category], 0)
        );
        
        this.charts.climateDistribution = new Chart(ctx.getContext('2d'), {
            type: 'pie',
            data: {
                labels: categories.map(cat => cat.replace('_', ' ')),
                datasets: [{
                    data: totals,
                    backgroundColor: this.colors.slice(0, 6),
                    borderWidth: 0,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            padding: 15,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const value = context.parsed;
                                const total = totals.reduce((a, b) => a + b, 0);
                                const percentage = ((value / total) * 100).toFixed(1);
                                return `${context.label}: ₹${value.toLocaleString()} crores (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }

    createDebtRevenueChart() {
        this.destroyChart('debtRevenue');
        const ctx = document.getElementById('debtRevenueChart');
        if (!ctx) return;
        
        const data = this.getFilteredData('debt_management');
        
        this.charts.debtRevenue = new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: data.map(d => d.City),
                datasets: [{
                    label: 'Debt-to-Revenue Ratio (%)',
                    data: data.map(d => d.Debt_to_Revenue_Ratio),
                    backgroundColor: data.map(d => d.Debt_to_Revenue_Ratio > 75 ? this.colors[2] : this.colors[6]),
                    borderRadius: 8,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Debt-to-Revenue: ${context.parsed.y.toFixed(1)}%`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }

    createPerCapitaDebtChart() {
        this.destroyChart('perCapitaDebt');
        const ctx = document.getElementById('perCapitaDebtChart');
        if (!ctx) return;
        
        const data = this.getFilteredData('debt_management');
        
        this.charts.perCapitaDebt = new Chart(ctx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: data.map(d => d.City),
                datasets: [{
                    data: data.map(d => d.Per_Capita_Debt),
                    backgroundColor: this.colors.slice(0, data.length),
                    borderWidth: 0,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ₹${context.parsed.toLocaleString()}`;
                            }
                        }
                    }
                }
            }
        });
    }

    createGrowthRateChart() {
        this.destroyChart('growthRate');
        const ctx = document.getElementById('growthRateChart');
        if (!ctx) return;
        
        const data = this.getFilteredData('yoy_comparison');
        
        this.charts.growthRate = new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: data.map(d => d.City),
                datasets: [{
                    label: 'Growth Rate (%)',
                    data: data.map(d => d.Growth_Rate),
                    backgroundColor: data.map(d => d.Growth_Rate > 8 ? this.colors[6] : this.colors[7]),
                    borderRadius: 8,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Growth Rate: ${context.parsed.y.toFixed(1)}%`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }

    createBudgetTrendsChart() {
        this.destroyChart('budgetTrends');
        const ctx = document.getElementById('budgetTrendsChart');
        if (!ctx) return;
        
        const data = this.getFilteredData('yoy_comparison');
        
        this.charts.budgetTrends = new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: data.map(d => d.City),
                datasets: [
                    {
                        label: 'Budget 2024-25',
                        data: data.map(d => d.Budget_2024_25),
                        backgroundColor: this.colors[8],
                        borderRadius: 8,
                    },
                    {
                        label: 'Budget 2025-26',
                        data: data.map(d => d.Budget_2025_26),
                        backgroundColor: this.colors[9],
                        borderRadius: 8,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ₹${context.parsed.y.toLocaleString()} crores`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '₹' + value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
    }
}

// Initialize the dashboard when DOM is loaded
let dashboard;
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Gujarat Budget Dashboard with Export Functionality...');
    dashboard = new BudgetDashboard();
});