-- Create table for supplements
CREATE TABLE supp (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    supplement VARCHAR(50) NOT NULL
);

-- Inserting the top 20 workout supplements and their serving sizes
INSERT INTO supp (name, supplement) VALUES 
    ('Whey Protein', '1 scoop (30g)'),
    ('Creatine Monohydrate', '5g'),
    ('BCAAs (Branched-Chain Amino Acids)', '1 scoop (10g)'),
    ('Pre-Workout', '1 scoop (15g)'),
    ('Glutamine', '5g'),
    ('Casein Protein', '1 scoop (30g)'),
    ('Fish Oil', '1 capsule (1000mg)'),
    ('Multivitamin', '1 tablet'),
    ('Beta-Alanine', '2g'),
    ('Caffeine', '200mg'),
    ('L-Glutamine', '5g'),
    ('Vitamin D3', '5000 IU'),
    ('ZMA (Zinc Magnesium Aspartate)', '3 capsules'),
    ('HMB (Hydroxy Methylbutyrate)', '3g'),
    ('L-Carnitine', '500mg'),
    ('Omega-3 Fatty Acids', '1 capsule (1000mg)'),
    ('Nitric Oxide Boosters', '1 scoop (10g)'),
    ('Taurine', '1 scoop (5g)'),
    ('Vitamin C', '1000mg'),
    ('Probiotics', '1 capsule');

DESC supp